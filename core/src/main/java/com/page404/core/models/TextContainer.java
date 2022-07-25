/*
 * ***********************************************************************
 * Page 404 CONFIDENTIAL
 * ___________________
 *
 * Copyright 2022 Page 404.
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains the property
 * of Page 404 and its suppliers, if any. The intellectual and
 * technical concepts contained herein are proprietary to Page 404
 * and its suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Page 404.
 * ***********************************************************************
 */

package com.page404.core.models;

import com.adobe.cq.export.json.ComponentExporter;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.osgi.annotation.versioning.ConsumerType;


/**
 * Defines the {@code TextContainer} Sling Model used for the {@code page404/components/text-container} component.
 * 
 */
@ConsumerType
public interface TextContainer
    extends ComponentExporter
{


    @JsonProperty("title")
    String getTitle();

    @JsonProperty("paragraph")
    String getParagraph();

    @JsonProperty("buttontext")
    String getButtontext();

}
